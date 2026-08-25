{% if context == "creating-machineset-vsphere" %}
{%- set vsphere = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Satisfying Ignition configuration requirements {id="machineset-upi-reqs-ignition-config_{{ context }}"}

For the Machine API to provision virtual machines (VMs) with the correct initial configuration using Ignition, a valid Ignition configuration is required. The Ignition configuration contains the `machine-config-server` address and a system trust bundle for obtaining further Ignition configurations from the Machine Config Operator. {._abstract}

By default, this configuration is stored in the `worker-user-data` secret in the `machine-api-operator` namespace. Compute machine sets reference the secret during the machine creation process.

**Procedure**

1.  To determine whether the required secret exists, run the following command:
    ```terminal
    $ oc get secret \
      -n openshift-machine-api worker-user-data \
      -o go-template='{{range $k,$v := .data}}{{printf "%s: " $k}}{{if not $v}}{{$v}}{{else}}{{$v | base64decode}}{{end}}{{"\n"}}{{end}}'
    ```
    ```terminal title="Sample output"
    disableTemplating: false
    userData:
      {
        "ignition": {
          ...
          },
        ...
      }
    ```

    The full output is omitted here, but this is the format to use.
1.  If the secret does not exist, create it by running the following command:
    ```terminal
    $ oc create secret generic worker-user-data \
      -n openshift-machine-api \
      --from-file=<installation_directory>/worker.ign
    ```

    Specifies the directory that was used to store your installation assets during cluster installation.

{% if context == "creating-machineset-vsphere" %}
{%- set vsphere = false -%}
{% endif %}