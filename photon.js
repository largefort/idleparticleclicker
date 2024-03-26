    // Photon initialization
    const appId = 'd04de501-6410-43e3-9f8d-2e68dbdcd2a3'; // Replace with your actual Photon App ID
    const client = new Photon.LoadBalancing.LoadBalancingClient(Photon.ConnectionProtocol.Ws, appId);

    // Event listeners for connection
    client.add_OnStateChange(onStateChange);
    client.add_OnError(onError);

    // Connect to Photon servers
    client.connectToRegionMaster('eu');

    // Event handler for connection state changes
    function onStateChange(state) {
        console.log('Connection state:', state);
        if (state === Photon.LoadBalancing.ConnectionState.ConnectedToMaster) {
            // Connected to Photon servers, join or create rooms here
        }
    }
