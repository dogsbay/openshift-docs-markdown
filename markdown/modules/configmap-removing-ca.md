{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing certificate authorities on a {{ product_title }} cluster {id="configmap-removing-ca_{{ context }}"}

You can remove certificate authorities (CA) from your cluster with the ROSA CLI, `rosa`. {._abstract}

**Prerequisites**

*   You must have cluster administrator privileges.
*   You have installed the ROSA CLI (`rosa`).
*   Your cluster has certificate authorities added.

**Procedure**

*   Use the `rosa edit` command to change the CA trust bundle. You must pass empty strings to the `--additional-trust-bundle-file` argument to clear the trust bundle from the cluster:
    ```terminal
    $ rosa edit cluster -c <cluster_name> --additional-trust-bundle-file ""
    ```

    **Example output**
    ```yaml
    I: Updated cluster <cluster_name>
    ```

**Verification**

*   To verify that you removed the trust bundle from the cluster, use the `rosa describe` command:
    ```yaml
    $ rosa describe cluster -c <cluster_name>
    ```

    Before removal, the Additional trust bundle section is displayed, redacting its value for security purposes:
    ```yaml {minja}
    Name:                       <cluster_name>
    ID:                         <cluster_internal_id>
    External ID:                <cluster_external_id>
    OpenShift Version:          {{ product_version }}.0
    Channel Group:              stable
    DNS:                        <dns>
    AWS Account:                <aws_account_id>
    API URL:                    <api_url>
    Console URL:                <console_url>
    Region:                     us-east-1
    Multi-AZ:                   false
    Nodes:
     - Control plane:           3
     - Infra:                   2
     - Compute:                 2
    Network:
     - Type:                    OVNKubernetes
     - Service CIDR:            <service_cidr>
     - Machine CIDR:            <machine_cidr>
     - Pod CIDR:                <pod_cidr>
     - Host Prefix:             <host_prefix>
    Proxy:
     - HTTPProxy:               <proxy_url>
    Additional trust bundle:    REDACTED
    ```

    After you remove the proxy, the Additional trust bundle section no longer displays:
    ```yaml {minja}
    Name:                       <cluster_name>
    ID:                         <cluster_internal_id>
    External ID:                <cluster_external_id>
    OpenShift Version:          {{ product_version }}.0
    Channel Group:              stable
    DNS:                        <dns>
    AWS Account:                <aws_account_id>
    API URL:                    <api_url>
    Console URL:                <console_url>
    Region:                     us-east-1
    Multi-AZ:                   false
    Nodes:
     - Control plane:           3
     - Infra:                   2
     - Compute:                 2
    Network:
     - Type:                    OVNKubernetes
     - Service CIDR:            <service_cidr>
     - Machine CIDR:            <machine_cidr>
     - Pod CIDR:                <pod_cidr>
     - Host Prefix:             <host_prefix>
    Proxy:
     - HTTPProxy:               <proxy_url>
    ```