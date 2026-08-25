{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a load balancer service {id="nw-create-load-balancer-service_{{ context }}"}

To distribute incoming traffic efficiently and ensure high availability for your applications in {{ product_title }}, create a load balancer service. {._abstract}

**Prerequisites**

*   Make sure that the project and service you want to expose exist.
*   Your cloud provider supports load balancers.

**Procedure**

1.  Log in to {{ product_title }}.
1.  Load the project where the service you want to expose is located.
    ```terminal title="Example command"
    $ oc project project1
    ```
1.  Open a text file on the control plane node and paste the following text into the file. Edit the file as needed.
    ```yaml title="Sample load balancer configuration file"
    apiVersion: v1
    kind: Service
    metadata:
      name: egress-2
    spec:
      ports:
      - name: db
        port: 3306
      loadBalancerIP:
      loadBalancerSourceRanges:
      - 10.0.0.0/8
      - 192.168.0.0/16
      type: LoadBalancer
      selector:
        name: mysql
    ```

    where:

    `metadata.name`
    :   Specifies a descriptive name for the load balancer service.

    `ports.port`
    :   Specifies the same port that the service you want to expose is listening on.

    `loadBalancerSourceRanges`
    :   Specifies a list of specific IP addresses to restrict traffic through the load balancer. The parameter is ignored if the cloud provider does not support the feature.

    `type`
    :   Specifies `Loadbalancer` as the type.

    `selector.name`
    :   Specifies the name of the service.

    :::note

    To restrict the traffic through the load balancer to specific IP addresses, use the `spec.endpointPublishingStrategy.loadBalancer.allowedSourceRanges` Ingress Controller parameter. Do not set the `loadBalancerSourceRanges` parameter.
    
    :::


1.  Save and exit the file.
1.  Run the following command to create the service:
    ```terminal
    $ oc create -f <file_name>
    ```

    For example:
    ```terminal
    $ oc create -f mysql-lb.yaml
    ```
1.  Execute the following command to view the new service:
    ```terminal
    $ oc get svc
    ```
    ```terminal title="Example output"
    NAME       TYPE           CLUSTER-IP      EXTERNAL-IP                             PORT(S)          AGE
    egress-2   LoadBalancer   172.30.22.226   ad42f5d8b303045-487804948.example.com   3306:30357/TCP   15m
    ```

    The service has an external IP address automatically assigned if there is a cloud provider enabled.
1.  On the master, use a tool, such as `curl`, to make sure you can reach the service by using the public IP address:
    ```terminal
    $ curl <public_ip>:<port>
    ```

    For example:
    ```terminal
    $ curl 172.29.121.74:3306
    ```

    The examples in this section use a MySQL service, which requires a client application. If you get a string of characters with the `Got packets out of order` message, you are connecting with the service:

    If you have a MySQL client, log in with the standard CLI command:
    ```terminal
    $ mysql -h 172.30.131.89 -u admin -p
    ```
    ```terminal title="Example output"
    Enter password:
    Welcome to the MariaDB monitor.  Commands end with ; or \g.

    MySQL [(none)]>
    ```