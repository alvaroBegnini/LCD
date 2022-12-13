declare function findClientsOffline(): Promise<{
    notSilenced: import("../../types/clientsOffline").mkauthClientWithDate[];
    silenced: import("../../types/clientsOffline").mkauthClientWithDate[];
}>;
export default findClientsOffline;
