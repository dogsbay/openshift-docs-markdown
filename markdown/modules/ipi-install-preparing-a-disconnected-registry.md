{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing the registry node to host the mirrored registry {id="ipi-install-preparing-a-disconnected-registry_{{ context }}"}

Prepare a registry node to host your local mirror registry for a {{ product_title }} installation. {._abstract}

Complete the following steps before hosting a mirrored registry on bare metal.

**Procedure**

1.  Open the firewall port on the registry node:
    ```terminal
    $ sudo firewall-cmd --add-port=5000/tcp --zone=libvirt  --permanent
    ```
    ```terminal
    $ sudo firewall-cmd --add-port=5000/tcp --zone=public   --permanent
    ```
    ```terminal
    $ sudo firewall-cmd --reload
    ```
1.  Install the required packages for the registry node:
    ```terminal
    $ sudo yum -y install python3 podman httpd httpd-tools jq
    ```
1.  Create the directory structure where the repository information will be held:
    ```terminal
    $ sudo mkdir -p /opt/registry/{auth,certs,data}
    ```