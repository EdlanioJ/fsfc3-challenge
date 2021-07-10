/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { Route } from './entities/route.entity';

@Injectable()
export class RoutesService {
  private routes: Route[] = [
    {
      id: '1',
      title: 'Rota 001',
      endPosition: {
        latitude: -12.57626,
        longitude: 13.40547,
      },
      startPosition: {
        latitude: -12.375729,
        longitude: 13.561045,
      },
    },
    {
      id: '2',
      title: 'Rota 002',
      endPosition: {
        latitude: -8.7833,
        longitude: 13.3667,
      },
      startPosition: {
        latitude: -8.901496394,
        longitude: 13.36999852,
      },
    },
    {
      id: '3',
      title: 'Rota 003',
      endPosition: {
        latitude: -8.827445,
        longitude: 13.263462,
      },
      startPosition: {
        latitude: -8.997064,
        longitude: 13.27212,
      },
    },
    {
      id: '4',
      title: 'Rota 004',
      endPosition: {
        latitude: -22.55941,
        longitude: 17.08323,
      },
      startPosition: {
        latitude: -16.38333,
        longitude: 16.63333,
      },
    },
    {
      id: '5',
      title: 'Rota 005',
      endPosition: {
        latitude: -8.8800744,
        longitude: 13.1871803,
      },
      startPosition: {
        latitude: -8.8730484,
        longitude: 13.0438072,
      },
    },
  ];

  create(_createRouteDto: CreateRouteDto) {
    return 'This action adds a new route';
  }

  findAll() {
    return this.routes;
  }

  findOne(id: number) {
    return `This action returns a #${id} route`;
  }

  update(id: number, _updateRouteDto: UpdateRouteDto) {
    return `This action updates a #${id} route`;
  }

  remove(id: number) {
    return `This action removes a #${id} route`;
  }
}
