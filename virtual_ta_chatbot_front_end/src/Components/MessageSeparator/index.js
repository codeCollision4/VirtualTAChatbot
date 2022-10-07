import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MessageSeparator } from '@chatscope/chat-ui-kit-react';
import classNames from "classnames";
import PropTypes from "prop-types";

const prefix = "cs";

const isChildrenNil = (children) =>
  children === null ||
  children === undefined ||
  (Array.isArray(children) && children.length === 0);

MessageSeparator = ({
    content,
    as,
    children,
    className,
    ...rest
  }) => {
    const cName = `${prefix}-message-separator`;
  
    const Tag = (() => {
      if (typeof as === "string" && as.length > 0) {
        return as;
      } else {
        return MessageSeparator.defaultProps.as;
      }
    })();
  
    return (
      <Tag {...rest} className={classNames(cName, className)}>
        {isChildrenNil(children) === true ? content : children}
      </Tag>
    );
  };
  
  MessageSeparator.propTypes = {
    /** Primary content. */
    children: PropTypes.node,
  
    /** Shorthand for primary content. */
    content: PropTypes.node,
  
    /** An element type to render as. */
    as: PropTypes.elementType,
  
    /** Additional classes. */
    className: PropTypes.string,
  };
  
  MessageSeparator.defaultProps = {
    children: undefined,
    content: undefined,
    as: "div",
};

export default MessageSeparator;