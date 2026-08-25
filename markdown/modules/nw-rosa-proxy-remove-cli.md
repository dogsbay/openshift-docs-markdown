{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing the cluster-wide proxy using CLI {id="nw-rosa-proxy-remove-cli_{{ context }}"}

You must use the ROSA CLI, `rosa`, to remove the proxy’s address from your cluster. {._abstract}

**Prerequisites**

*   You must have cluster administrator privileges.
*   You have installed the ROSA CLI (`rosa`).

**Procedure**

*   Use the `rosa edit` command to change the proxy. You must pass empty strings to the `--http-proxy` and `--https-proxy` arguments to clear the proxy from the cluster:
    ```terminal
    $ rosa edit cluster -c <cluster_name> --http-proxy "" --https-proxy ""
    ```

    :::note

    While your proxy might only use one of the proxy arguments, the system ignores the empty fields, so passing empty strings to both the `--http-proxy` and `--https-proxy` arguments does not cause any issues.
    
    :::


    **Example output**
    ```yaml
    I: Updated cluster <cluster_name>
    ```

**Verification**

*   You can verify that you removed the proxy from the cluster by using the `rosa describe` command:
    ```yaml
    $ rosa describe cluster -c <cluster_name>
    ```

    Before removal, the proxy IP displays in a proxy section:
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

    After removing the proxy, the proxy section is removed:
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
    Additional trust bundle:    REDACTED
    ```