{%- set _mod_docs_content_type = "PROCEDURE" %}
# Editing the Keda Controller CR {id="nodes-cma-autoscaling-keda-controller-edit_{{ context }}"}

You can use the following procedure to modify the `KedaController` custom resource (CR), which is automatically installed during the installation of the Custom Metrics Autoscaler Operator.

**Procedure**

1.  In the {{ product_title }} web console, click **Ecosystem** → **Installed Operators**.
1.  Click **Custom Metrics Autoscaler**.
1.  On the **Operator Details** page, click the **KedaController** tab.
1.  On the **KedaController** tab, click **Create KedaController** and edit the file.
    ```yaml
    kind: KedaController
    apiVersion: keda.sh/v1alpha1
    metadata:
      name: keda
      namespace: openshift-keda
    spec:
      watchNamespace: '' (1)
      operator:
        logLevel: info (2)
        logEncoder: console (3)
        caConfigMaps: (4)
        - thanos-cert
        - kafka-cert
        volumeMounts: (5)
        - mountPath: /<path_to_directory>
          name: <name>
        volumes: (6)
        - name: <volume_name>
          emptyDir:
            medium: Memory
      metricsServer:
        logLevel: '0' (7)
        auditConfig: (8)
          logFormat: "json"
          logOutputVolumeClaim: "persistentVolumeClaimName"
          policy:
            rules:
            - level: Metadata
            omitStages: ["RequestReceived"]
            omitManagedFields: false
          lifetime:
            maxAge: "2"
            maxBackup: "1"
            maxSize: "50"
      serviceAccount: {}
    ```
    1.  Specifies a single namespace in which the Custom Metrics Autoscaler Operator scales applications. Leave it blank or leave it empty to scale applications in all namespaces. This field should have a namespace or be empty. The default value is empty.
    1.  Specifies the level of verbosity for the Custom Metrics Autoscaler Operator log messages. The allowed values are `debug`, `info`, `error`. The default is `info`.
    1.  Specifies the logging format for the Custom Metrics Autoscaler Operator log messages. The allowed values are `console` or `json`. The default is `console`.
    1.  Optional: Specifies one or more config maps with CA certificates, which the Custom Metrics Autoscaler Operator can use to connect securely to TLS-enabled metrics sources.
    1.  Optional: Add the container mount path.
    1.  Optional: Add a `volumes` block to list each projected volume source. 
    1.  Specifies the logging level for the Custom Metrics Autoscaler Metrics Server. The allowed values are `0` for `info` and `4` for `debug`. The default is `0`.
    1.  Activates audit logging for the Custom Metrics Autoscaler Operator and specifies the audit policy to use, as described in the "Configuring audit logging" section.
1.  Click **Save** to save the changes.