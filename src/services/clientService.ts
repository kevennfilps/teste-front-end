import api from "./api";

export interface Client {
  id: number;
  name: string;
  salary: number;
  companyValuation: number;
  createdAt: string;
  updatedAt: string;
}

export interface GetClientsResponse {
  clients: Client[];
  totalPages: number;
  currentPage: number;
}

export interface CreateClientDTO {
  name: string;
  salary: number;
  companyValuation: number;
}

export const getClients = async (page = 1, limit = 12): Promise<GetClientsResponse> => {
  const { data } = await api.get<GetClientsResponse>("/users", {
    params: { page, limit },
  });
  return data;
};

export const createClient = async (client: CreateClientDTO) => {
  const { data } = await api.post("/users", client);
  return data;
};
