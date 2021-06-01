import CollectionItem from "../colletion-item/collection-item.component";
import "./collection-preview.component.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
      {/* <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
      </div> */}
    </div>
  );
};

export default CollectionPreview;
