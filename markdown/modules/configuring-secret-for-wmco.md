{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a secret for the Windows Machine Config Operator {id="configuring-secret-for-wmco_{{ context }}"}

Before you can use the Windows Machine Config Operator (WMCO), you must create a secret in the same WMCO namespace as your private key.  {._abstract}

This secret is required to allow the WMCO to communicate with the Windows virtual machine (VM). Use a different private key than the one used when installing the cluster.

**Prerequisites**

*   You installed the Windows Machine Config Operator (WMCO) using Operator Lifecycle Manager (OLM).
*   You created a PEM-encoded file containing a private key by using a strong algorithm, such as ECDSA.
    {% include "./snippets/wmco-key-ascii-encoding.md" %}

**Procedure**

*   Define the secret required to access the Windows VMs:
    ```terminal
    $ oc create secret generic cloud-private-key --from-file=private-key.pem=${HOME}/.ssh/<key> \
        -n openshift-windows-machine-config-operator
    ```

    You must create the private key in the WMCO namespace, such as `openshift-windows-machine-config-operator`.