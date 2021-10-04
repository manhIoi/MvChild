import {AxiosResponse} from 'axios';
import callApi from '../utils/callApi';

const baseUrl = 'https://netime.glitch.me/api/v1';

const getSlides = async () => {
  try {
    const request = await callApi('GET', `${baseUrl}/slide`);
    if (request.data.success) {
      return request.data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const getSection = async (category: string, slug?: string) => {
  try {
    const request = await callApi(
      'GET',
      `${baseUrl}/${category}/${slug ? slug : ''}`,
    );
    if (request.data.success) {
      return request.data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const getInfoMoive = async (slug: string) => {
  try {
    const request = await callApi('GET', `${baseUrl}/anime/${slug}`);
    if (request.data.success) {
      return request.data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const rootApi = {
  getSlides,
  getSection,
  getInfoMoive,
};

export default rootApi;
