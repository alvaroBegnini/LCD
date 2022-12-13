export type client = {
  silenced: mkauthClientWithDate[];
  notSilenced: mkauthClientWithDate[];
}
export type mkauthClientWithDate = {
  uuid: String;
  id: String;
  codigo: String;
  date: String;
  nome: String;
  bloqueado: String;
  cli_ativado: String;
  nome_res: String;
  login: String;
  cpf_cnpj: String;
  tipo: String;
  coordenadas: String;
  senha: String;
  email: String;
  ip: String;
  mac: String;
  ramal: String;
  endereco: String;
  numero: String;
  bairro: String;
  complemento: String;
  cidade: String;
  estado: String;
  cep: String;
};