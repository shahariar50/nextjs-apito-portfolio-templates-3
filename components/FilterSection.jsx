import Link from "next/link";
import React, { useState } from "react";

const FilterSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filterList = [
    { slag: "all", title: "All" },
    { slag: "digital", title: "Digital" },
    { slag: "web_design", title: "Web Design" },
    { slag: "marketing", title: "Marketing" },
  ];

  const filterImages = [
    {
      slag: "img1",
      img: "/static/photo-1558212628-ad7f5fb28c5e.jpg",
      filterTags: ["all", "digital"],
      title: "Aramark",
      category: "Marketing",
    },
    {
      slag: "img2",
      img: "/static/photo-1558180702-95f1c3ae2ca3.jpg",
      filterTags: ["all", "marketing"],
      title: "Portfolio page",
      category: "Web design",
    },
    {
      slag: "img3",
      img: "/static/photo-1558082513-13668c3b7425.jpg",
      filterTags: ["all", "marketing"],
      title: "Sunday Breakfast",
      category: "Branding",
    },
    {
      slag: "img4",
      img: "/static/photo-1558100984-01e6cd6fc9aa.jpg",
      filterTags: ["all", "marketing"],
      title: "Sunday Breakfast",
      category: "All",
    },
    {
      slag: "img5",
      img: "/static/photo-1557941760-987c3f403d5a.jpg",
      filterTags: ["all", "marketing", "digital"],
      title: "Pine Street",
      category: "Web + Digital",
    },
    {
      slag: "img6",
      img: "/static/photo-1534073828943-f801091bb18c.jpg",
      filterTags: ["all", "web_design", "digital"],
      title: "Mobipaid",
      category: "Branding",
    },
    {
      slag: "img7",
      img: "/static/photo-1484755560615-a4c64e778a6c.jpg",
      filterTags: ["all", "web_design"],
      title: "Solo Solution",
      category: "Logo",
    },
    {
      slag: "img8",
      img: "/static/photo-1494253109108-2e30c049369b.jpg",
      filterTags: ["all", "web_design", "marketing"],
      title: "Panic web",
      category: "Branding Campaign",
    },
    {
      slag: "img9",
      img: "/static/photo-1436262513933-a0b06755c784.jpg",
      filterTags: ["all", "web_design", "digital"],
      title: "Solocademy",
      category: "Web design + Branding",
    },
    {
      slag: "img10",
      img: "/static/photo-1494475673543-6a6a27143fc8.jpg",
      filterTags: ["all", "web_design", "digital"],
      title: "Soulart",
      category: "Marketing",
    },
    {
      slag: "img11",
      img: "/static/photo-1501534664411-d04203736d05.jpg",
      filterTags: ["all", "marketing", "web_design", "digital"],
      title: "DuleSavic",
      category: "Fudbaler",
    },
  ];

  const handleFilterClick = (e, text) => {
    e.preventDefault();
    setSelectedFilter(text);
  };

  return (
    <section className="space-md">
      <div id="portfolio" className="container">
        <div id="portfolio-filters">
          <ul id="filters" className="p-0">
            {filterList.map((filter) => (
              <li key={filter?.slag}>
                <Link
                  href="#"
                  onClick={(e) => handleFilterClick(e, filter?.slag)}
                  className={filter?.slag === selectedFilter ? "active" : ""}
                >
                  {filter?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="filterWrapper">
          {filterImages.map(
            (filterImage) =>
              filterImage?.filterTags?.includes(selectedFilter) && (
                <div
                  key={filterImage?.slag}
                  className="entry work-entry branding"
                >
                  <div
                    className="entry-image imageBG"
                    style={{ backgroundImage: `url(${filterImage?.img})` }}
                  >
                    <picture>
                      <img src={filterImage?.img} alt={filterImage?.slag} />
                    </picture>
                  </div>
                  <div className="work-entry-hover">
                    <div className="work-entry-content">
                      <div className="work-entry-title">
                        {filterImage?.title}
                      </div>
                      <div className="work-entry-cat">
                        {filterImage?.category}
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
