export class Directory {
  name: string;
  path: string;
  size: number;
  extension: string;
  created: string;
  isDirectory: boolean;
  permissions: string;

  constructor(
    name: string,
    path: string,
    size: number,
    extension: string,
    created: string,
    isDirectory: boolean,
    permissions: string
  ) {
    this.name = name;
    this.path = path;
    this.size = size;
    this.extension = extension;
    this.created = created;
    this.isDirectory = isDirectory;
    this.permissions = permissions;
  }
}
