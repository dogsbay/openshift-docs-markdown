{%- set _mod_docs_content_type = "PROCEDURE" %}
# Connecting the Spring PetClinic sample application to the PostgreSQL database service {id="sbo-connecting-spring-petclinic-sample-app-to-postgresql-database-service_{{ context }}"}

To connect the sample application to the database service, you must create a `ServiceBinding` custom resource (CR) that triggers the {{ servicebinding_title }} to project the binding data into the application.

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
        - group: postgres-operator.crunchydata.com
          version: v1beta1
          kind: PostgresCluster (2)
          name: hippo
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
    NAME                         READY   REASON              AGE
    spring-petclinic-pgcluster   True    ApplicationsBound   7s
    ```

    By default, the values from the binding data of the database service are projected as files into the workload container that runs the sample application. For example, all the values from the Secret resource are projected into the `bindings/spring-petclinic-pgcluster` directory.

    :::note

    Optionally, you can also verify that the files in the application contain the projected binding data, by printing out the directory contents:

    ```terminal
    $ for i in username password host port type; do oc exec -it deploy/spring-petclinic -n my-petclinic -- /bin/bash -c 'cd /tmp; find /bindings/*/'$i' -exec echo -n {}:" " \; -exec cat {} \;'; echo; done
    ```

    ```text title="Example output: With all the values from the secret resource"
    /bindings/spring-petclinic-pgcluster/username: <username>
    /bindings/spring-petclinic-pgcluster/password: <password>
    /bindings/spring-petclinic-pgcluster/host: hippo-primary.my-petclinic.svc
    /bindings/spring-petclinic-pgcluster/port: 5432
    /bindings/spring-petclinic-pgcluster/type: postgresql
    ```
    
    :::

1.  Set up the port forwarding from the application port to access the sample application from your local environment:
    ```terminal
    $ oc port-forward --address 0.0.0.0 svc/spring-petclinic 8080:80 -n my-petclinic
    ```
    ```terminal title="Example output"
    Forwarding from 0.0.0.0:8080 -> 8080
    Handling connection for 8080
    ```
1.  Access [http://localhost:8080/petclinic](http://localhost:8080/petclinic).

    You can now remotely access the Spring PetClinic sample application at localhost:8080 and see that the application is now connected to the database service.