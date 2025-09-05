import React from "react";

const BlogPost = ({ image, title, link, alt }) => (
  <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 mb-4">
    <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
      <img src={image} alt={alt} className="w-full h-full object-cover" />
    </div>
    <div className="flex-grow">
      <h3 className="text-gray-800 font-medium text-sm leading-relaxed hover:text-blue-600 transition-colors duration-200">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
    </div>
    <div className="flex-shrink-0"></div>
  </div>
);

const HRBlogUI = () => {
  const blogPosts = [
    {
      id: 1,
      image:
        "https://cdn.discordapp.com/attachments/1114968798827659355/1413634033187029083/Screenshot_2025-09-06_024547.png?ex=68bca4c9&is=68bb5349&hm=4237d35f6a5abd62833468dc821507291c8864e1da8a5b47e6f20c64e5eba42e&",
      title: "Role of an effective Human resource manager in Health care",
      link: "https://chamindakumarahrminhealthcare.blogspot.com/2024/11/role-of-effective-humanresource.html",
      alt: "Healthcare HR manager",
    },
    {
      id: 2,
      image:
        "https://media.discordapp.net/attachments/1114968798827659355/1413634033643946024/Screenshot_2025-09-06_024553.png?ex=68bca4c9&is=68bb5349&hm=7d89f70456fa759736f527f80505c112524fb4d22be94f8806a99e52d85045ad&=&format=webp&quality=lossless&width=1001&height=746",
      title: "Role of team work... Path to a better health care",
      link: "https://chamindakumarahrminhealthcare.blogspot.com/2024/11/team-work.html",
      alt: "Healthcare teamwork",
    },
    {
      id: 3,
      image:
        "https://media.discordapp.net/attachments/1114968798827659355/1413634034050924667/Screenshot_2025-09-06_024603.png?ex=68bca4c9&is=68bb5349&hm=b2aea99fff7aa9b9ca51532baf172e8c9247165cb9bf9bf41ba46374450978aa&=&format=webp&quality=lossless&width=999&height=749",
      title: "Aligning Talents with Business Goals for Long-Term Success",
      link: "https://chamindakumarahrminhealthcare.blogspot.com/2024/11/aligning-talents-withbusiness-goals.html",
      alt: "Business alignment and talent management",
    },
    {
      id: 4,
      image:
        "https://media.discordapp.net/attachments/1114968798827659355/1413634034415702087/Screenshot_2025-09-06_024613.png?ex=68bca4c9&is=68bb5349&hm=6ac068b40e6f9d2d5809ab0d9d6a1e55629f9f40d3468e6a11509fed83faa976&=&format=webp&quality=lossless&width=995&height=743",
      title: "Employee expectations in health care industry",
      link: "https://chamindakumarahrminhealthcare.blogspot.com/2024/11/employee-expectationsin-health-care.html",
      alt: "Healthcare employee expectations",
    },
    {
      id: 5,
      image:
        "https://media.discordapp.net/attachments/1114968798827659355/1413634034717687910/Screenshot_2025-09-06_024620.png?ex=68bca4c9&is=68bb5349&hm=99a3df3d5f021b91f472a3b4b3bc4fdd57d64b33913dbf209220267930923970&=&format=webp&quality=lossless&width=999&height=744",
      title: "Why Employee relation is vital in HRM",
      link: "https://chamindakumarahrminhealthcare.blogspot.com/2024/11/why-employee-relationis-vital-in-hrm.html",
      alt: "Employee relations in HRM",
    },
    {
      id: 6,
      image:
        "https://media.discordapp.net/attachments/1114968798827659355/1413634035049173114/Screenshot_2025-09-06_024627.png?ex=68bca4ca&is=68bb534a&hm=c765d247535bdde42a266e626aa90abfe75d4b3b263ed3b3de36d182615459c3&=&format=webp&quality=lossless&width=1002&height=750",
      title: "Performance and skill management in Health care industry",
      link: "https://chamindakumarahrminhealthcare.blogspot.com/2024/11/performance-and-skillmanagement-in.html",
      alt: "Performance and skill management",
    },
    {
      id: 7,
      image:
        "https://media.discordapp.net/attachments/1114968798827659355/1413634035397165140/Screenshot_2025-09-06_024633.png?ex=68bca4ca&is=68bb534a&hm=a280ec18b990e48e510ccec63081b73b76ed4951443658d5f3cefc2ada123b01&=&format=webp&quality=lossless&width=1005&height=666",
      title: "Role of Human Resource Management in Health care industry",
      link: "https://chamindakumarahrminhealthcare.blogspot.com/2024/11/role-of-humanresource-management-in.html",
      alt: "HRM in healthcare industry",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white ">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center text-[#00436D] mb-12">
            Leadership &{" "}
            <span className="text-gray-900">Management Practice</span>
          </h1>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <BlogPost
              key={post.id}
              image={post.image}
              title={post.title}
              link={post.link}
              alt={post.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HRBlogUI;
