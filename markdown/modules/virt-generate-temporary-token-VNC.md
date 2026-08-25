{%- set _mod_docs_content_type = "PROCEDURE" %}
# Generate a temporary token for the VNC console {id="virt-generate-temporary-token-VNC_{{ context }}"}

To access the VNC of a virtual machine (VM), generate a temporary authentication bearer token for the Kubernetes API. {._abstract}


:::note

Kubernetes also supports authentication using client certificates, instead of a bearer token, by modifying the curl command.

:::


**Prerequisites**

*   A running VM with {{ VirtProductName }} 4.14 or later and `ssp-operator` 4.14 or later.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Set the `deployVmConsoleProxy` field value in the `HyperConverged` (`HCO`) custom resource (CR) to `true`:
    ```terminal
    $ oc patch {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }} --type json -p '[{"op": "replace", "path": "/spec/deployVmConsoleProxy", "value": true}]'
    ```
1.  Generate a token by entering the following command:
    ```terminal
    $ curl --header "Authorization: Bearer ${TOKEN}" \
         "https://api.<cluster_fqdn>/apis/token.kubevirt.io/v1alpha1/namespaces/<namespace>/virtualmachines/<vm_name>/vnc?duration=<duration>"
    ```

    You can set the `<duration>` parameter in hours and minutes, with a minimum duration of 10 minutes. For example: `5h30m`. If you do not set this parameter, the token is valid for 10 minutes by default.

    Sample output:
    ```terminal
    { "token": "eyJhb..." }
    ```
1.  Optional: Use the token provided in the output to create a variable:
    ```terminal
    $ export VNC_TOKEN="<token>"
    ```

    You can now use the token to access the VNC console of a VM.

**Verification**

1.  Log in to the cluster by entering the following command:
    ```terminal
    $ oc login --token ${VNC_TOKEN}
    ```
1.  Test access to the VNC console of the VM by using the `virtctl` command:
    ```terminal
    $ virtctl vnc <vm_name> -n <namespace>
    ```


:::warning

You cannot currently revoke a specific token.

To revoke a token, you must delete the service account that you used to create it. However, this also revokes all other tokens that you created by using the service account. Use the following command with caution:

```terminal
$ virtctl delete serviceaccount --namespace "<namespace>" "<vm_name>-vnc-access"
```

:::