import "./SiteInfo.scss";

const SiteInfo = ({data}) => {
  return <div className="site-info">
    <p className="date">{data.date}</p>
    <h3>{data.title} {data.date}</h3>
    <img src={data.image} alt="site image" />
    <p className="text">{data.text}</p>
  </div>;
};

export default SiteInfo;
