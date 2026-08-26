{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring intra-cluster networking {id="learning-deploying-application-networking-intraculter-networking_{{ context }}"}

You can view your networking configurations such as internal ClusterIP addresses and microservices in your OSToy application. These isolated processes help improve application stability and demonstrate how internal web requests are handled. {._abstract}

**Procedure**

1.  In the OSToy application web console, click **Networking** in the left menu. 
1.  Review the networking configuration. The tile "Hostname Lookup" illustrates how the service name created for a pod translates into an internal ClusterIP address.
    ![OSToy Networking page](/images/deploying-networking-example.png)
1.  Enter the name of the microservice created in the "Hostname Lookup" tile following the format: `<service_name>.<namespace>.svc.cluster.local`. You can find the microservice name in the service definition of `ostoy-microservice.yaml` by running the following command: 
    ```terminal
    $ oc get service <name_of_service> -o yaml
    ```

    **For example**:
    ```yaml
    apiVersion: v1
    kind: Service
    metadata:
      name: ostoy-microservice-svc
      labels:
        app: ostoy-microservice
    spec:
      type: ClusterIP
      ports:
        - port: 8080
          targetPort: 8080
          protocol: TCP
      selector:
        app: ostoy-microservice
    ```

    In this example, the full hostname is `ostoy-microservice-svc.ostoy.svc.cluster.local`.
1.  An IP address is returned. In this example it is `172.30.165.246`. This is the intra-cluster IP address, which is only accessible from within the cluster.
    ![OSToy DNS](/images/deploying-networking-dns.png)