interface Position {
  latitude: number;
  longitude: number;
}

export interface RouteProps {
  id: string;
  title: string;
  startPosition: Position;
  endPosition: Position;
}
