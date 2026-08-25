{%- set _mod_docs_content_type = "REFERENCE" %}
# NFD Topology Updater command-line flags {id="nfd-topology-updater-command-line-flags_{{ context }}"}

You can use the NFD Topology Updater command-line flags to control TLS authentication, resource detection intervals, and connection settings for communicating node resource topology to nfd-master. {._abstract}

To view available flags, run the `nfd-topology-updater -help` command. For example, in a Podman container, run the following command:

```terminal
$ podman run gcr.io/k8s-staging-nfd/node-feature-discovery:master nfd-topology-updater -help
```


`-ca-file`
:   Specifies the TLS root certificate for verifying the authenticity of nfd-master. The `-ca-file` flag is one of three flags, together with `-cert-file` and `-key-file`, that controls mutual TLS authentication on the NFD Topology Updater. Default: empty.

    :::important


    The `-ca-file` flag must be specified together with the `-cert-file` and `-key-file` flags.
    
    :::

    ```terminal title="Example"
    $ nfd-topology-updater -ca-file=/opt/nfd/ca.crt -cert-file=/opt/nfd/updater.crt -key-file=/opt/nfd/updater.key
    ```


`-cert-file`
:   Specifies the TLS certificate presented for authenticating outgoing requests. The `-cert-file` flag is one of three flags, together with `-ca-file` and `-key-file`, that controls mutual TLS authentication on the NFD Topology Updater. Default: empty.

    :::important


    The `-cert-file` flag must be specified together with the `-ca-file` and `-key-file` flags.
    
    :::

    ```terminal title="Example"
    $ nfd-topology-updater -cert-file=/opt/nfd/updater.crt -key-file=/opt/nfd/updater.key -ca-file=/opt/nfd/ca.crt
    ```


`-h`, `-help`
:   Print usage and exit.


`-key-file`
:   Specifies the private key corresponding to the given certificate file, or `-cert-file`, that is used for authenticating outgoing requests. The `-key-file` flag is one of three flags, together with `-ca-file` and `-cert-file`, that controls mutual TLS authentication on the NFD Topology Updater. Default: empty.

    :::important


    The `-key-file` flag must be specified together with the `-ca-file` and `-cert-file` flags.
    
    :::

    ```terminal title="Example"
    $ nfd-topology-updater -key-file=/opt/nfd/updater.key -cert-file=/opt/nfd/updater.crt -ca-file=/opt/nfd/ca.crt
    ```


`-kubelet-config-file`
:   Specifies the path to the kubelet’s configuration file. Default: `/host-var/lib/kubelet/config.yaml`.
    ```terminal title="Example"
    $ nfd-topology-updater -kubelet-config-file=/var/lib/kubelet/config.yaml
    ```


`-no-publish`
:   Disables all communication with the nfd-master, making it a dry run flag for nfd-topology-updater. NFD Topology Updater runs resource hardware topology detection normally, but no CR requests are sent to nfd-master. Default: `false`.
    ```terminal title="Example"
    $ nfd-topology-updater -no-publish
    ```


`-oneshot`
:   Causes the NFD Topology Updater to exit after one pass of resource hardware topology detection. Default: `false`.
    ```terminal title="Example"
    $ nfd-topology-updater -oneshot -no-publish
    ```


`-podresources-socket`
:   Specifies the path to the UNIX socket where kubelet exports a gRPC service to enable discovery of in-use CPUs and devices, and to provide metadata for them. Default: `/host-var/lib/kubelet/pod-resources/kubelet.sock`.
    ```terminal title="Example"
    $ nfd-topology-updater -podresources-socket=/var/lib/kubelet/pod-resources/kubelet.sock
    ```


`-server`
:   Specifies the address of the nfd-master endpoint to connect to. Default: `localhost:8080`.
    ```terminal title="Example"
    $ nfd-topology-updater -server=nfd-master.nfd.svc.cluster.local:443
    ```


`-server-name-override`
:   Specifies the common name (CN) which to expect from the nfd-master TLS certificate. This flag is mostly intended for development and debugging purposes. Default: empty.
    ```terminal title="Example"
    $ nfd-topology-updater -server-name-override=localhost
    ```


`-sleep-interval`
:   Specifies the interval between resource hardware topology re-examination and custom resource updates. A non-positive value implies infinite sleep interval and no re-detection is done. Default: `60s`.
    ```terminal title="Example"
    $ nfd-topology-updater -sleep-interval=1h
    ```


`-version`
:   Print version and exit.


`-watch-namespace`
:   Specifies the namespace to ensure that resource hardware topology examination only happens for the pods running in the specified namespace. Pods that are not running in the specified namespace are not considered during resource accounting. This is particularly useful for testing and debugging purposes. A `**` value means that all of the pods across all namespaces are considered during the accounting process. Default: `**`.
    ```terminal title="Example"
    $ nfd-topology-updater -watch-namespace=rte
    ```