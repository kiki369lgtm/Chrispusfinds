import React from "react";
import { Link } from "react-router-dom";

// In your JSX:

function Homepage ()
{
    return
    <Link to="/categories" className="view-all-btn">
  View All Products →
</Link>

}

export default Homepage;