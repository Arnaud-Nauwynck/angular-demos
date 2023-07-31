
/**
 * structural interface for Todo
 * (example: for exchanging via json)
 */
export interface Todo {
  id: number;
  description: string;
  priority: number;
}

/**
 * model class for Todo
 */
export class TodoModel {
  id: number;
  description: string;
  priority: number;

  constructor(id: number, description: string, priority: number) {
    this.id = id;
    this.description = description;
    this.priority = priority;
  }
}
