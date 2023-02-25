(function() {var implementors = {
"approx":[],
"geo_types":[["impl&lt;T:&nbsp;<a class=\"trait\" href=\"geo_types/trait.CoordNum.html\" title=\"trait geo_types::CoordNum\">CoordNum</a> + <a class=\"trait\" href=\"approx/relative_eq/trait.RelativeEq.html\" title=\"trait approx::relative_eq::RelativeEq\">RelativeEq</a>&gt; <a class=\"trait\" href=\"approx/relative_eq/trait.RelativeEq.html\" title=\"trait approx::relative_eq::RelativeEq\">RelativeEq</a>&lt;<a class=\"struct\" href=\"geo_types/geometry/struct.Coord.html\" title=\"struct geo_types::geometry::Coord\">Coord</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"geo_types/geometry/struct.Coord.html\" title=\"struct geo_types::geometry::Coord\">Coord</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"associatedtype\" href=\"approx/abs_diff_eq/trait.AbsDiffEq.html#associatedtype.Epsilon\" title=\"type approx::abs_diff_eq::AbsDiffEq::Epsilon\">Epsilon</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"approx/relative_eq/trait.RelativeEq.html\" title=\"trait approx::relative_eq::RelativeEq\">RelativeEq</a>&lt;<a class=\"struct\" href=\"geo_types/geometry/struct.GeometryCollection.html\" title=\"struct geo_types::geometry::GeometryCollection\">GeometryCollection</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"geo_types/geometry/struct.GeometryCollection.html\" title=\"struct geo_types::geometry::GeometryCollection\">GeometryCollection</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"approx/abs_diff_eq/trait.AbsDiffEq.html\" title=\"trait approx::abs_diff_eq::AbsDiffEq\">AbsDiffEq</a>&lt;Epsilon = T&gt; + <a class=\"trait\" href=\"geo_types/trait.CoordNum.html\" title=\"trait geo_types::CoordNum\">CoordNum</a> + <a class=\"trait\" href=\"approx/relative_eq/trait.RelativeEq.html\" title=\"trait approx::relative_eq::RelativeEq\">RelativeEq</a>,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"approx/relative_eq/trait.RelativeEq.html\" title=\"trait approx::relative_eq::RelativeEq\">RelativeEq</a>&lt;<a class=\"struct\" href=\"geo_types/geometry/struct.Line.html\" title=\"struct geo_types::geometry::Line\">Line</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"geo_types/geometry/struct.Line.html\" title=\"struct geo_types::geometry::Line\">Line</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"approx/abs_diff_eq/trait.AbsDiffEq.html\" title=\"trait approx::abs_diff_eq::AbsDiffEq\">AbsDiffEq</a>&lt;Epsilon = T&gt; + <a class=\"trait\" href=\"geo_types/trait.CoordNum.html\" title=\"trait geo_types::CoordNum\">CoordNum</a> + <a class=\"trait\" href=\"approx/relative_eq/trait.RelativeEq.html\" title=\"trait approx::relative_eq::RelativeEq\">RelativeEq</a>,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"approx/relative_eq/trait.RelativeEq.html\" title=\"trait approx::relative_eq::RelativeEq\">RelativeEq</a>&lt;<a class=\"struct\" href=\"geo_types/geometry/struct.LineString.html\" title=\"struct geo_types::geometry::LineString\">LineString</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"geo_types/geometry/struct.LineString.html\" title=\"struct geo_types::geometry::LineString\">LineString</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"approx/abs_diff_eq/trait.AbsDiffEq.html\" title=\"trait approx::abs_diff_eq::AbsDiffEq\">AbsDiffEq</a>&lt;Epsilon = T&gt; + <a class=\"trait\" href=\"geo_types/trait.CoordNum.html\" title=\"trait geo_types::CoordNum\">CoordNum</a> + <a class=\"trait\" href=\"approx/relative_eq/trait.RelativeEq.html\" title=\"trait approx::relative_eq::RelativeEq\">RelativeEq</a>,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"approx/relative_eq/trait.RelativeEq.html\" title=\"trait approx::relative_eq::RelativeEq\">RelativeEq</a>&lt;<a class=\"struct\" href=\"geo_types/geometry/struct.MultiLineString.html\" title=\"struct geo_types::geometry::MultiLineString\">MultiLineString</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"geo_types/geometry/struct.MultiLineString.html\" title=\"struct geo_types::geometry::MultiLineString\">MultiLineString</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"approx/abs_diff_eq/trait.AbsDiffEq.html\" title=\"trait approx::abs_diff_eq::AbsDiffEq\">AbsDiffEq</a>&lt;Epsilon = T&gt; + <a class=\"trait\" href=\"geo_types/trait.CoordNum.html\" title=\"trait geo_types::CoordNum\">CoordNum</a> + <a class=\"trait\" href=\"approx/relative_eq/trait.RelativeEq.html\" title=\"trait approx::relative_eq::RelativeEq\">RelativeEq</a>,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"approx/relative_eq/trait.RelativeEq.html\" title=\"trait approx::relative_eq::RelativeEq\">RelativeEq</a>&lt;<a class=\"struct\" href=\"geo_types/geometry/struct.MultiPoint.html\" title=\"struct geo_types::geometry::MultiPoint\">MultiPoint</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"geo_types/geometry/struct.MultiPoint.html\" title=\"struct geo_types::geometry::MultiPoint\">MultiPoint</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"approx/abs_diff_eq/trait.AbsDiffEq.html\" title=\"trait approx::abs_diff_eq::AbsDiffEq\">AbsDiffEq</a>&lt;Epsilon = T&gt; + <a class=\"trait\" href=\"geo_types/trait.CoordNum.html\" title=\"trait geo_types::CoordNum\">CoordNum</a> + <a class=\"trait\" href=\"approx/relative_eq/trait.RelativeEq.html\" title=\"trait approx::relative_eq::RelativeEq\">RelativeEq</a>,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"approx/relative_eq/trait.RelativeEq.html\" title=\"trait approx::relative_eq::RelativeEq\">RelativeEq</a>&lt;<a class=\"struct\" href=\"geo_types/geometry/struct.MultiPolygon.html\" title=\"struct geo_types::geometry::MultiPolygon\">MultiPolygon</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"geo_types/geometry/struct.MultiPolygon.html\" title=\"struct geo_types::geometry::MultiPolygon\">MultiPolygon</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"approx/abs_diff_eq/trait.AbsDiffEq.html\" title=\"trait approx::abs_diff_eq::AbsDiffEq\">AbsDiffEq</a>&lt;Epsilon = T&gt; + <a class=\"trait\" href=\"geo_types/trait.CoordNum.html\" title=\"trait geo_types::CoordNum\">CoordNum</a> + <a class=\"trait\" href=\"approx/relative_eq/trait.RelativeEq.html\" title=\"trait approx::relative_eq::RelativeEq\">RelativeEq</a>,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"approx/relative_eq/trait.RelativeEq.html\" title=\"trait approx::relative_eq::RelativeEq\">RelativeEq</a>&lt;<a class=\"struct\" href=\"geo_types/geometry/struct.Point.html\" title=\"struct geo_types::geometry::Point\">Point</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"geo_types/geometry/struct.Point.html\" title=\"struct geo_types::geometry::Point\">Point</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"approx/abs_diff_eq/trait.AbsDiffEq.html\" title=\"trait approx::abs_diff_eq::AbsDiffEq\">AbsDiffEq</a>&lt;Epsilon = T&gt; + <a class=\"trait\" href=\"geo_types/trait.CoordNum.html\" title=\"trait geo_types::CoordNum\">CoordNum</a> + <a class=\"trait\" href=\"approx/relative_eq/trait.RelativeEq.html\" title=\"trait approx::relative_eq::RelativeEq\">RelativeEq</a>,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"approx/relative_eq/trait.RelativeEq.html\" title=\"trait approx::relative_eq::RelativeEq\">RelativeEq</a>&lt;<a class=\"struct\" href=\"geo_types/geometry/struct.Polygon.html\" title=\"struct geo_types::geometry::Polygon\">Polygon</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"geo_types/geometry/struct.Polygon.html\" title=\"struct geo_types::geometry::Polygon\">Polygon</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"approx/abs_diff_eq/trait.AbsDiffEq.html\" title=\"trait approx::abs_diff_eq::AbsDiffEq\">AbsDiffEq</a>&lt;Epsilon = T&gt; + <a class=\"trait\" href=\"geo_types/trait.CoordNum.html\" title=\"trait geo_types::CoordNum\">CoordNum</a> + <a class=\"trait\" href=\"approx/relative_eq/trait.RelativeEq.html\" title=\"trait approx::relative_eq::RelativeEq\">RelativeEq</a>,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"approx/relative_eq/trait.RelativeEq.html\" title=\"trait approx::relative_eq::RelativeEq\">RelativeEq</a>&lt;<a class=\"struct\" href=\"geo_types/geometry/struct.Rect.html\" title=\"struct geo_types::geometry::Rect\">Rect</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"geo_types/geometry/struct.Rect.html\" title=\"struct geo_types::geometry::Rect\">Rect</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"approx/abs_diff_eq/trait.AbsDiffEq.html\" title=\"trait approx::abs_diff_eq::AbsDiffEq\">AbsDiffEq</a>&lt;Epsilon = T&gt; + <a class=\"trait\" href=\"geo_types/trait.CoordNum.html\" title=\"trait geo_types::CoordNum\">CoordNum</a> + <a class=\"trait\" href=\"approx/relative_eq/trait.RelativeEq.html\" title=\"trait approx::relative_eq::RelativeEq\">RelativeEq</a>,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"approx/relative_eq/trait.RelativeEq.html\" title=\"trait approx::relative_eq::RelativeEq\">RelativeEq</a>&lt;<a class=\"struct\" href=\"geo_types/geometry/struct.Triangle.html\" title=\"struct geo_types::geometry::Triangle\">Triangle</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"geo_types/geometry/struct.Triangle.html\" title=\"struct geo_types::geometry::Triangle\">Triangle</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"approx/abs_diff_eq/trait.AbsDiffEq.html\" title=\"trait approx::abs_diff_eq::AbsDiffEq\">AbsDiffEq</a>&lt;Epsilon = T&gt; + <a class=\"trait\" href=\"geo_types/trait.CoordNum.html\" title=\"trait geo_types::CoordNum\">CoordNum</a> + <a class=\"trait\" href=\"approx/relative_eq/trait.RelativeEq.html\" title=\"trait approx::relative_eq::RelativeEq\">RelativeEq</a>,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"approx/relative_eq/trait.RelativeEq.html\" title=\"trait approx::relative_eq::RelativeEq\">RelativeEq</a>&lt;<a class=\"enum\" href=\"geo_types/geometry/enum.Geometry.html\" title=\"enum geo_types::geometry::Geometry\">Geometry</a>&lt;T&gt;&gt; for <a class=\"enum\" href=\"geo_types/geometry/enum.Geometry.html\" title=\"enum geo_types::geometry::Geometry\">Geometry</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"approx/abs_diff_eq/trait.AbsDiffEq.html\" title=\"trait approx::abs_diff_eq::AbsDiffEq\">AbsDiffEq</a>&lt;Epsilon = T&gt; + <a class=\"trait\" href=\"geo_types/trait.CoordNum.html\" title=\"trait geo_types::CoordNum\">CoordNum</a> + <a class=\"trait\" href=\"approx/relative_eq/trait.RelativeEq.html\" title=\"trait approx::relative_eq::RelativeEq\">RelativeEq</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()