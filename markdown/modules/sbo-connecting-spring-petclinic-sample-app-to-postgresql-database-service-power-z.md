{%- set _mod_docs_content_type = "PROCEDURE" %}
# Connecting the Spring PetClinic sample application to the PostgreSQL database service {id="sbo-connecting-spring-petclinic-sample-app-to-postgresql-database-service-ibm-power-z_{{ context }}"}

To connect the sample application to the database service, you must create a `ServiceBinding` custom resource (CR) that triggers the {{ servicebinding_title }} to project the binding data into the application. {._abstract}

**Procedure**

1.  Create a `ServiceBinding` CR to project the binding data:
    ```terminal
    $ oc apply -n my-petclinic -f - << EOD
    ---
    apiVersion: binding.operators.coreos.com/v1alpha1
    kind: ServiceBinding
    metadata:
        name: spring-petclinic-pgcluster
    spec:
      services: (1)
        - group: postgresql.dev4devs.com
          kind: Database (2)
          name: sampledatabase
          version: v1alpha1
      application: (3)
        name: spring-petclinic
        group: apps
        version: v1
        resource: deployments
    EOD
    ```
    1.  Specifies a list of service resources.
    1.  The CR of the database.
    1.  The sample application that points to a Deployment or any other similar resource with an embedded PodSpec.

        The output verifies that the `ServiceBinding` CR is created to project the binding data into the sample application.
        ```terminal title="Example output"
        servicebinding.binding.operators.coreos.com/spring-petclinic created
        ```
1.  Verify that the request for service binding is successful:
    ```terminal
    $ oc get servicebindings -n my-petclinic
    ```
    ```terminal title="Example output"
    NAME                          READY   REASON              AGE
    spring-petclinic-postgresql   True    ApplicationsBound   47m
    ```

    By default, the values from the binding data of the database service are projected as files into the workload container that runs the sample application. For example, all the values from the Secret resource are projected into the `bindings/spring-petclinic-pgcluster` directory.
1.  Once this is created, you can go to the topology to see the visual connection.
    **Figure 1. Connecting spring-petclinic to a sample database**

    ![img_power](/_assets/images/img_power.png)
1.  Set up the port forwarding from the application port to access the sample application from your local environment:
    ```terminal
    $ oc port-forward --address 0.0.0.0 svc/spring-petclinic 8080:80 -n my-petclinic
    ```
    ```terminal title="Example output"
    Forwarding from 0.0.0.0:8080 -> 8080
    Handling connection for 8080
    ```
1.  Access [http://localhost:8080](http://localhost:8080).

    You can now remotely access the Spring PetClinic sample application at localhost:8080 and see that the application is now connected to the database service.