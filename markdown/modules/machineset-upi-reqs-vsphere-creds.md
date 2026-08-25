{%- set _mod_docs_content_type = "PROCEDURE" %}
# Satisfying vSphere credentials requirements {id="machineset-upi-reqs-vsphere-creds_{{ context }}"}

To use compute machine sets and manage virtual machine (VM) resources, the Machine API must be able to interact with vCenter. Credentials that authorize the Machine API components to interact with vCenter must exist in a secret in the `openshift-machine-api` namespace. {._abstract}

**Procedure**

1.  To determine whether the required credentials exist, run the following command:
    ```terminal
    $ oc get secret \
      -n openshift-machine-api vsphere-cloud-credentials \
      -o go-template='{{range $k,$v := .data}}{{printf "%s: " $k}}{{if not $v}}{{$v}}{{else}}{{$v | base64decode}}{{end}}{{"\n"}}{{end}}'
    ```
    ```terminal title="Sample output"
    <vcenter-server>.password=<openshift-user-password>
    <vcenter-server>.username=<openshift-user>
    ```

    where

    `<vcenter_server>`
    :   Specifies the IP address or fully qualified domain name (FQDN) of the vCenter server and `<openshift_user_password>` and `<openshift_user>` are the {{ product_title }} administrator credentials to use.
1.  If the secret does not exist, create it by running the following command:
    ```terminal
    $ oc create secret generic vsphere-cloud-credentials \
      -n openshift-machine-api \
      --from-literal=<vcenter-server>.username=<openshift-user> --from-literal=<vcenter-server>.password=<openshift-user-password>
    ```