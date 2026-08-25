# Creating a service from an Operator {id="creating-a-service-from-an-operator_{{ context }}"}

If an Operator has valid values defined in its `metadata` to start the requested service, you can use the service with `odo service create`.

1.  Print the YAML of the service as a file on your local drive:
    ```terminal
    $ oc get csv/etcdoperator.v0.9.4 -o yaml
    ```
1.  Verify that the values of the service are valid:
    ```terminal
    apiVersion: etcd.database.coreos.com/v1beta2
    kind: EtcdCluster
    metadata:
      name: example
    spec:
      size: 3
      version: 3.2.13
    ```
1.  Start an `EtcdCluster` service from the `etcdoperator.v0.9.4` Operator:
    ```terminal
    $ odo service create etcdoperator.v0.9.4 EtcdCluster
    ```
1.  Verify that a service has started:
    ```terminal
    $ oc get EtcdCluster
    ```