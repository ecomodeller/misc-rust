use std::fs::File;
use std::io::{BufRead, BufReader};

use geo::{Coord, LineString, MultiPolygon, Polygon};

pub struct Geometry {
    pub nodes: Vec<Node>,
    pub element_table: ElementTable,
}

impl Geometry {
    pub fn get_element(&self, id: usize) -> &Element {
        &self.element_table.elements[id - 1]
    }

    pub fn get_node(&self, id: usize) -> &Node {
        &self.nodes[id - 1]
    }

    pub fn get_elements_for_node(&self, id: usize) -> Vec<&Element> {
        let mut elements = Vec::new();
        for element in &self.element_table.elements {
            if element.nodes.contains(&id) {
                elements.push(element);
            }
        }
        elements
    }

    // a function that returns to convert the geometry to a MultiPolygon
    pub fn to_multipolygon(&self) -> MultiPolygon<f64> {
        let mut polygons = Vec::new();
        for element in &self.element_table.elements {
            let mut coordinates = Vec::new();
            for node_id in &element.nodes {
                let node = self.get_node(*node_id);
                coordinates.push(Coord {
                    x: node.coordinates[0],
                    y: node.coordinates[1],
                });
            }
            let polygon = Polygon::new(LineString(coordinates), vec![]);
            polygons.push(polygon);
        }
        MultiPolygon(polygons)
    }
}

#[derive(Debug)]
pub struct Element {
    pub id: usize,
    pub nodes: Vec<usize>,
}

impl Element {
    /// Create a new element
    /// # Panics
    /// Panics if the id is less than 1
    /// # Examples
    /// ```
    /// use mesh::Element;
    /// let element = Element::new(1, vec![1, 2, 3]);
    /// ```
    pub fn new(id: usize, nodes: Vec<usize>) -> Element {
        if id < 1 {
            panic!("Element id must be greater than 0");
        }
        Element { id, nodes }
    }
}

pub struct ElementTable {
    /// A vector of elements
    /// # Examples
    /// ```
    /// use mesh::ElementTable;
    /// let elements = vec![];
    /// let el1 = Element::new(1, vec![1, 2, 3]);
    /// let el2 = Element::new(2, vec![1, 2, 3]);
    /// elements.push(el1);
    /// elements.push(el2);
    /// let element_table = ElementTable { elements: elements };
    /// ```
    pub elements: Vec<Element>,
}

pub struct Node {
    pub id: usize,
    pub coordinates: Vec<f64>,
    pub code: usize,
}

pub fn read_element_line(filename: &str, start_line: usize) -> usize {
    let file = File::open(filename).expect("file not found");
    let reader = BufReader::new(file);

    let mut lines = reader.lines();

    let line = lines.nth(start_line).unwrap().unwrap();

    let parts = line.split_whitespace().collect::<Vec<&str>>();
    let number_of_elements = parts[0].parse::<usize>().unwrap();

    number_of_elements
}

pub fn read_node_coordinates(filename: &str, start_line: usize, number_lines: usize) -> Vec<Node> {
    let file = File::open(filename).expect("file not found");
    let reader = BufReader::new(file);

    let mut nodes = Vec::<Node>::new();

    for (i, line) in reader.lines().enumerate() {
        if i >= start_line {
            if i < start_line + number_lines {
                let line = line.unwrap();
                let parts = line.split_whitespace().collect::<Vec<&str>>();
                let node = Node {
                    id: parts[0].parse::<usize>().unwrap(),
                    coordinates: parts[1..4]
                        .iter()
                        .map(|x| x.parse::<f64>().unwrap())
                        .collect(),
                    code: parts[4].parse::<usize>().unwrap(),
                };
                nodes.push(node);
            }
        }
    }

    nodes
}

// read line line with item type, unit, number of nodes and projection string
pub fn read_line(filename: &str) -> usize {
    let file = File::open(filename).expect("file not found");
    let mut reader = BufReader::new(file);
    let mut line = String::new();
    reader.read_line(&mut line).expect("error reading line");
    let parts = line.split_whitespace().collect::<Vec<&str>>();
    let number_of_nodes = parts[2].parse::<usize>().unwrap();

    number_of_nodes
}

pub fn read_elements_from_file(filename: &str, start_line: usize) -> ElementTable {
    let mut elements = Vec::<Element>::new();

    let file = File::open(filename).expect("file not found");
    let reader = BufReader::new(file);
    for (i, line) in reader.lines().enumerate() {
        if i < start_line {
            continue;
        }

        let mut line_numbers = Vec::new();
        let line = line.unwrap();

        for number in line.split_whitespace() {
            let number = number.parse::<usize>().unwrap();
            line_numbers.push(number);
        }
        let element = Element {
            id: line_numbers[0],
            nodes: line_numbers[1..].to_vec(),
        };
        elements.push(element);
    }
    ElementTable { elements: elements }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_get_node() {
        let mut nodes = Vec::new();
        nodes.push(Node {
            id: 1,
            coordinates: vec![0.0, 0.0],
            code: 0,
        });
        nodes.push(Node {
            id: 2,
            coordinates: vec![1.0, 0.0],
            code: 0,
        });
        nodes.push(Node {
            id: 3,
            coordinates: vec![1.0, 1.0],
            code: 0,
        });
        nodes.push(Node {
            id: 4,
            coordinates: vec![0.0, 1.0],
            code: 0,
        });

        let geometry = Geometry {
            nodes: nodes,
            element_table: ElementTable {
                elements: Vec::new(),
            },
        };

        let node = geometry.get_node(2);
        assert_eq!(node.coordinates[0], 1.0);
        assert_eq!(node.coordinates[1], 0.0);
    }

    #[test]
    fn test_get_last_element() {
        let mut elements = Vec::new();
        elements.push(Element {
            id: 1,
            nodes: vec![1, 2, 3, 4],
        });
        elements.push(Element {
            id: 2,
            nodes: vec![2, 3, 4, 5],
        });
        elements.push(Element {
            id: 3,
            nodes: vec![3, 4, 5, 6],
        });

        let geometry = Geometry {
            nodes: Vec::new(),
            element_table: ElementTable { elements: elements },
        };

        let element = geometry.get_element(3);
        assert!(element.nodes.contains(&6));
    }

    #[test]
    #[should_panic]
    fn test_get_missing_element_panics() {
        let mut elements = Vec::new();
        elements.push(Element {
            id: 1,
            nodes: vec![1, 2, 3, 4],
        });

        let geometry = Geometry {
            nodes: Vec::new(),
            element_table: ElementTable { elements: elements },
        };

        // panics because element 0 does not exist, elements start at 1
        geometry.get_element(0);
    }

    #[test]
    #[should_panic]
    fn test_add_element_with_id_less_than_1_is_not_allowed() {
        Element::new(0, vec![1, 2, 3, 4]);
    }
}
