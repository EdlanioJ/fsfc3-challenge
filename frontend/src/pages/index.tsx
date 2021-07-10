import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { RouteProps } from '../utils/route';

type HomeProps = {
  routes: RouteProps[];
};

export default function Home() {
  const [routes, setRoutes] = useState<RouteProps[]>([]);
  async function loadRoutes() {
    const response = await fetch('http://localhost:3000/routes');
    const jsonResponse: RouteProps[] = await response.json();

    setRoutes(jsonResponse);
  }

  useEffect(() => {
    loadRoutes();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Route list</title>
        <meta name="description" content="My route list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Start Position</th>
            <th>End Position</th>
          </tr>
        </thead>
        <tbody>
          {routes.map((route) => (
            <tr key={route.id}>
              <td>{route.title}</td>
              <td>
                <tr>
                  <th>Latitude</th>
                  <td>{route.startPosition.latitude}</td>
                </tr>
                <tr>
                  <th>Longitude</th>
                  <td>{route.startPosition.longitude}</td>
                </tr>
              </td>

              <td>
                <tr>
                  <th>Latitude</th>
                  <td>{route.endPosition.latitude}</td>
                </tr>
                <tr>
                  <th>Longitude</th>
                  <td>{route.endPosition.longitude}</td>
                </tr>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
