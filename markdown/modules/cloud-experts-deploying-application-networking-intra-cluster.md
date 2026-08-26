{%- set _mod_docs_content_type = "PROCEDURE" %}
# Intra-cluster networking {id="cloud-experts-deploying-application-networking-intra-cluster_{{ context }}"}

You can view your networking configurations in your OSToy application. {._abstract}

**Procedure**

1.  In the OSToy application, click **Networking** in the left menu. 
1.  Review the networking configuration. The right tile titled "Hostname Lookup" illustrates how the service name created for a pod can be used to translate into an internal ClusterIP address.
    ![OSToy Networking page](/images/deploying-networking-example.png)
1.  Enter the name of the microservice created in the right tile ("Hostname Lookup") following the format of `<service_name>.<namespace>.svc.cluster.local`. You can find this service name in the service definition of `ostoy-microservice.yaml` by running the following command: 
    ```terminal
    $ oc get service <name_of_service> -o yaml
    ```

    **Example output**
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
1.  You see an IP address returned. In this example it is `172.30.165.246`. This is the intra-cluster IP address, which is only accessible from within the cluster.
    ![OSToy DNS](/images/deploying-networking-dns.png)