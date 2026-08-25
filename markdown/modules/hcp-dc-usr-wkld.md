{%- set _mod_docs_content_type = "PROCEDURE" %}
# Resolving user workload monitoring issues {id="hcp-dc-usr-wkld_{{ context }}"}

If you installed {{ mce_short }} on {{ product_title }} clusters that are not connected to the internet, when you try to run the user workload monitoring feature, it might fail with an error. {._abstract}

For example, when you try to run the user workload monitoring feature by entering the following command, it fails with an error:

```terminal
$ oc get events -n hypershift
```

```terminal
LAST SEEN   TYPE      REASON           OBJECT                MESSAGE
4m46s       Warning   ReconcileError   deployment/operator   Failed to ensure UWM telemetry remote write: cannot get telemeter client secret: Secret "telemeter-client" not found
```

To resolve the error, you must disable the user workload monitoring option by creating a config map in the `local-cluster` namespace. You can create the config map either before or after you enable the add-on. The add-on agent reconfigures the HyperShift Operator.

**Procedure**

1.  Create the following config map:
    ```yaml
    kind: ConfigMap
    apiVersion: v1
    metadata:
      name: hypershift-operator-install-flags
      namespace: local-cluster
    data:
      installFlagsToAdd: ""
      installFlagsToRemove: "--enable-uwm-telemetry-remote-write"
    ```
1.  Apply the config map by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```