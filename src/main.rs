mod mesh;
use mesh::Geometry;

fn main() {
    // TODO let filename be a command line argument
    let filename = "north_sea.mesh";

    let number_of_nodes = mesh::read_line(filename);
    println!("number of nodes: {}", number_of_nodes);

    let nodes = mesh::read_node_coordinates(filename, 1, number_of_nodes);
    let mut start_line = 1 + number_of_nodes;

    let number_of_elements = mesh::read_element_line(filename, start_line);

    start_line = 1 + number_of_nodes + 1;

    let table = mesh::read_elements_from_file(filename, start_line);

    assert_eq!(table.elements.len(), number_of_elements);

    // print the nodes
    for node in &nodes[..10] {
        println!(
            "Id:{} Coords: {:?} Code:{}",
            node.id, node.coordinates, node.code
        );
    }

    // print the table
    for element in &table.elements[..10] {
        println!("{} {:?}", element.id, element.nodes);
    }

    let geometry = Geometry {
        nodes: nodes,
        element_table: table,
    };

    let last_node = geometry.get_node(56371);
    println!(
        "Id:{} Coords: {:?} Code:{}",
        last_node.id, last_node.coordinates, last_node.code
    );

    println!("Element 1: {:?}", geometry.get_element(1));
    let node_id = 42;
    let elements = geometry.get_elements_for_node(node_id);
    let elids = elements.iter().map(|x| x.id).collect::<Vec<usize>>();

    println!("Elements for node {} : {:?}", node_id, elids);

    let mp = geometry.to_multipolygon();
    //println!("MultiPolygon: {:?}", mp);

    // save the multipolygon to a geojson file

    //convert mulipolygon to geo::Geometry
    let geo_geometry = geo::Geometry::from(mp);

    let geojson = geojson::GeoJson::from(&geo_geometry);

    let geojson_string = geojson.to_string();
    std::fs::write("ukns.geojson", geojson_string).unwrap();
}
