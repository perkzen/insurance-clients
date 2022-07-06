import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateInsuranceDto } from './dto/create-insurance.dto';
import axios from 'axios';
import { Insurance } from '../../types/Insurance';
import { filterList } from '../../utils/filter';

@Injectable()
export class InsurancesService {
  constructor(private configService: ConfigService) {}

  INSURANCE_MICROSERVICE = this.configService.get('INSURANCE_SERVICE_URL');

  async create(insurance: CreateInsuranceDto): Promise<Insurance> {
    try {
      const { data } = await axios.post(this.INSURANCE_MICROSERVICE, insurance);
      return data;
    } catch (e) {
      throw new HttpException(e.response.data.message, e.response.status);
    }
  }

  async findAll(): Promise<Insurance[]> {
    try {
      const { data } = await axios.get(this.INSURANCE_MICROSERVICE);
      return data;
    } catch (e) {
      throw new HttpException(e.response.data.message, e.response.status);
    }
  }

  async findById(id: number): Promise<Insurance> {
    try {
      const { data } = await axios.get(`${this.INSURANCE_MICROSERVICE}/${id}`);
      return data;
    } catch (e) {
      throw new HttpException(e.response.data.message, e.response.status);
    }
  }

  async findByUser(id: number): Promise<Insurance[]> {
    try {
      const { data } = await axios.get(
        `${this.INSURANCE_MICROSERVICE}/user/${id}`,
      );
      return data;
    } catch (e) {
      throw new HttpException(e.response.data.message, e.response.status);
    }
  }

  async findByVehicle(reg: string): Promise<Insurance[]> {
    try {
      const { data } = await axios.get(
        `${this.INSURANCE_MICROSERVICE}/vehicle/${reg}`,
      );
      return data;
    } catch (e) {
      throw new HttpException(e.response.data.message, e.response.status);
    }
  }

  async update(id: number, insurance: CreateInsuranceDto): Promise<Insurance> {
    try {
      const { data } = await axios.put(
        `${this.INSURANCE_MICROSERVICE}/${id}`,
        insurance,
      );
      return data;
    } catch (e) {
      throw new HttpException(e.response.data.message, e.response.status);
    }
  }

  async filter(query: { firstname: string; lastname: string; reg: string }) {
    try {
      const { data } = await axios.get(this.INSURANCE_MICROSERVICE);

      if (!query.reg) {
        return filterList(
          data,
          `${query.firstname} ${
            query.lastname !== 'undefined' ? query.lastname : ''
          }`,
        );
      }

      return data.filter((item: Insurance) => {
        if (item.vehicleRegistration.includes(query.reg) && query.reg !== '') {
          return true;
        }
        return false;
      });
    } catch (e) {
      throw new HttpException(e.response.data.message, e.response.status);
    }
  }
}
