(function() {var implementors = {
"geo":[["impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"geo/trait.CoordNum.html\" title=\"trait geo::CoordNum\">CoordNum</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"geo/algorithm/lines_iter/struct.LineStringIter.html\" title=\"struct geo::algorithm::lines_iter::LineStringIter\">LineStringIter</a>&lt;'a, T&gt;"],["impl&lt;'a, Iter1:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.1/std/primitive.reference.html\">&amp;'a </a>Iter2&gt;, Iter2:&nbsp;<a class=\"trait\" href=\"geo/algorithm/lines_iter/trait.LinesIter.html\" title=\"trait geo::algorithm::lines_iter::LinesIter\">LinesIter</a>&lt;'a&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"geo/algorithm/lines_iter/struct.MapLinesIter.html\" title=\"struct geo::algorithm::lines_iter::MapLinesIter\">MapLinesIter</a>&lt;'a, Iter1, Iter2&gt;"],["impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"geo/algorithm/winding_order/struct.Points.html\" title=\"struct geo::algorithm::winding_order::Points\">Points</a>&lt;'a, T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"geo/trait.CoordNum.html\" title=\"trait geo::CoordNum\">CoordNum</a>,</span>"],["impl&lt;C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"geo/algorithm/sweep/struct.Intersections.html\" title=\"struct geo::algorithm::sweep::Intersections\">Intersections</a>&lt;C&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"geo/algorithm/sweep/trait.Cross.html\" title=\"trait geo::algorithm::sweep::Cross\">Cross</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"]],
"geo_types":[["impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"geo_types/trait.CoordNum.html\" title=\"trait geo_types::CoordNum\">CoordNum</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"geo_types/struct.PointsIter.html\" title=\"struct geo_types::PointsIter\">PointsIter</a>&lt;'a, T&gt;"]],
"heapless":[["impl&lt;'a, T, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.1/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"heapless/struct.OldestOrdered.html\" title=\"struct heapless::OldestOrdered\">OldestOrdered</a>&lt;'a, T, N&gt;"],["impl&lt;'a, T, Idx, K, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.1/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"heapless/sorted_linked_list/struct.Iter.html\" title=\"struct heapless::sorted_linked_list::Iter\">Iter</a>&lt;'a, T, Idx, K, N&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Idx: <a class=\"trait\" href=\"heapless/sorted_linked_list/trait.SortedLinkedListIndex.html\" title=\"trait heapless::sorted_linked_list::SortedLinkedListIndex\">SortedLinkedListIndex</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"heapless/sorted_linked_list/trait.Kind.html\" title=\"trait heapless::sorted_linked_list::Kind\">Kind</a>,</span>"],["impl&lt;'a, T, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.1/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"heapless/spsc/struct.Iter.html\" title=\"struct heapless::spsc::Iter\">Iter</a>&lt;'a, T, N&gt;"],["impl&lt;'a, T, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.1/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"heapless/spsc/struct.IterMut.html\" title=\"struct heapless::spsc::IterMut\">IterMut</a>&lt;'a, T, N&gt;"]],
"proc_macro2":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"proc_macro2/token_stream/struct.IntoIter.html\" title=\"struct proc_macro2::token_stream::IntoIter\">IntoIter</a>"]],
"rstar":[["impl&lt;'a, T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"rstar/iterators/struct.IntersectionIterator.html\" title=\"struct rstar::iterators::IntersectionIterator\">IntersectionIterator</a>&lt;'a, T, U&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"rstar/trait.RTreeObject.html\" title=\"trait rstar::RTreeObject\">RTreeObject</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"rstar/trait.RTreeObject.html\" title=\"trait rstar::RTreeObject\">RTreeObject</a>&lt;Envelope = T::<a class=\"associatedtype\" href=\"rstar/trait.RTreeObject.html#associatedtype.Envelope\" title=\"type rstar::RTreeObject::Envelope\">Envelope</a>&gt;,</span>"],["impl&lt;'a, T, Func&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"rstar/iterators/struct.SelectionIterator.html\" title=\"struct rstar::iterators::SelectionIterator\">SelectionIterator</a>&lt;'a, T, Func&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"rstar/trait.RTreeObject.html\" title=\"trait rstar::RTreeObject\">RTreeObject</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Func: <a class=\"trait\" href=\"rstar/trait.SelectionFunction.html\" title=\"trait rstar::SelectionFunction\">SelectionFunction</a>&lt;T&gt;,</span>"],["impl&lt;'a, T, Func&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"rstar/iterators/struct.SelectionIteratorMut.html\" title=\"struct rstar::iterators::SelectionIteratorMut\">SelectionIteratorMut</a>&lt;'a, T, Func&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"rstar/trait.RTreeObject.html\" title=\"trait rstar::RTreeObject\">RTreeObject</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Func: <a class=\"trait\" href=\"rstar/trait.SelectionFunction.html\" title=\"trait rstar::SelectionFunction\">SelectionFunction</a>&lt;T&gt;,</span>"],["impl&lt;'a, T, R, Params&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"rstar/iterators/struct.DrainIterator.html\" title=\"struct rstar::iterators::DrainIterator\">DrainIterator</a>&lt;'a, T, R, Params&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"rstar/trait.RTreeObject.html\" title=\"trait rstar::RTreeObject\">RTreeObject</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Params: <a class=\"trait\" href=\"rstar/trait.RTreeParams.html\" title=\"trait rstar::RTreeParams\">RTreeParams</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"rstar/trait.SelectionFunction.html\" title=\"trait rstar::SelectionFunction\">SelectionFunction</a>&lt;T&gt;,</span>"]],
"serde_json":[["impl&lt;'de, R, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"serde_json/struct.StreamDeserializer.html\" title=\"struct serde_json::StreamDeserializer\">StreamDeserializer</a>&lt;'de, R, T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"serde_json/de/trait.Read.html\" title=\"trait serde_json::de::Read\">Read</a>&lt;'de&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</span>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.Iter.html\" title=\"struct serde_json::map::Iter\">Iter</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.IterMut.html\" title=\"struct serde_json::map::IterMut\">IterMut</a>&lt;'a&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.IntoIter.html\" title=\"struct serde_json::map::IntoIter\">IntoIter</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.Keys.html\" title=\"struct serde_json::map::Keys\">Keys</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.Values.html\" title=\"struct serde_json::map::Values\">Values</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.ValuesMut.html\" title=\"struct serde_json::map::ValuesMut\">ValuesMut</a>&lt;'a&gt;"]],
"smallvec":[["impl&lt;'a, T:&nbsp;'a + <a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"smallvec/struct.Drain.html\" title=\"struct smallvec::Drain\">Drain</a>&lt;'a, T&gt;"],["impl&lt;A:&nbsp;<a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"smallvec/struct.IntoIter.html\" title=\"struct smallvec::IntoIter\">IntoIter</a>&lt;A&gt;"]],
"syn":[["impl&lt;'a, T, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"syn/punctuated/struct.Pairs.html\" title=\"struct syn::punctuated::Pairs\">Pairs</a>&lt;'a, T, P&gt;"],["impl&lt;'a, T, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"syn/punctuated/struct.PairsMut.html\" title=\"struct syn::punctuated::PairsMut\">PairsMut</a>&lt;'a, T, P&gt;"],["impl&lt;T, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"syn/punctuated/struct.IntoPairs.html\" title=\"struct syn::punctuated::IntoPairs\">IntoPairs</a>&lt;T, P&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"syn/punctuated/struct.IntoIter.html\" title=\"struct syn::punctuated::IntoIter\">IntoIter</a>&lt;T&gt;"],["impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"syn/punctuated/struct.Iter.html\" title=\"struct syn::punctuated::Iter\">Iter</a>&lt;'a, T&gt;"],["impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"syn/punctuated/struct.IterMut.html\" title=\"struct syn::punctuated::IterMut\">IterMut</a>&lt;'a, T&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()