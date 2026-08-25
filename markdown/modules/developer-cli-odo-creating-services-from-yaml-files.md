# Creating services from YAML files {id="creating-services-from-yaml-files_{{ context }}"}

If the YAML definition of the service or custom resource (CR) has invalid or placeholder data, you can use the `--dry-run` flag to get the YAML definition, specify the correct values, and start the service using the corrected YAML definition.
Printing and modifying the YAML used to start a service
`{{ odo_title }}` provides the feature to print the YAML definition of the service or CR provided by the Operator before starting a service.

1.  To display the YAML of the service, run:
    ```terminal
    $ odo service create <operator-name> --dry-run
    ```

    For example, to print YAML definition of `EtcdCluster` provided by the `etcdoperator.v0.9.4` Operator, run:
    ```terminal
    $ odo service create etcdoperator.v0.9.4 --dry-run
    ```

    The YAML is saved as the `etcd.yaml` file.
1.  Modify the `etcd.yaml` file:
    ```yaml
    apiVersion: etcd.database.coreos.com/v1beta2
    kind: EtcdCluster
    metadata:
      name: my-etcd-cluster // (1)
    spec:
      size: 1 // (2)
      version: 3.2.13
    ```
    1.  Change the name from `example` to `my-etcd-cluster`
    1.  Reduce the size from `3` to `1`
1.  Start a service from the YAML file:
    ```terminal
    $ odo service create --from-file etcd.yaml
    ```
1.  Verify that the `EtcdCluster` service has started with one pod instead of the preconfigured three pods:
    ```terminal
    $ oc get pods | grep my-etcd-cluster
    ```