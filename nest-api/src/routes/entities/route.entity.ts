interface Position {
  latitude: number;
  longitude: number;
}

export class Route {
  id: string;
  title: string;
  startPosition: Position;
  endPosition: Position;
}
