import HttpException from "./http.exception";

class ItemAlreadyExistsException extends HttpException {
  constructor() {
    super(403, "ItemAlreadyExistsException", "item already exists.");
  }
}

export default ItemAlreadyExistsException;
