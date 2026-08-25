{%- set _mod_docs_content_type = "PROCEDURE" %}
# Integrating Keycloak with the OpenShift OAuth server in a disconnected cluster {id="gitops-additional-steps-disconnected-clusters_{{ context }}"}

In a disconnected cluster, Keycloak communicates with the OpenShift OAuth server through a proxy.

**Procedure**

Follow these steps to integrate Keycloak with the OpenShift OAuth server:

1.  Log in to the Keycloak pod:
    ```terminal
    $ oc exec -it dc/keycloak -n argocd -- /bin/bash
    ```
1.  Launch the JBoss CLI tool to set up the proxy mappings:
    ```terminal
    /opt/eap/bin/jboss-cli.sh
    ```
1.  In the JBoss CLI tool, run the following command to start an embedded standalone server:
    ```terminal
    embed-server --server-config=standalone-openshift.xml
    ```
1.  Set up proxy mappings for the OpenShift OAuth server host:
    ```terminal
    /subsystem=keycloak-server/spi=connectionsHttpClient/provider=default:write-attribute(name=properties.proxy-mappings,value=["<oauth-server-hostname>;http://<proxy-server-host>:<proxy-server-port>"])
    ```
1.  Stop the embedded server:
    ```terminal
    quit
    ```
1.  Reload the JBoss CLI tool to apply the proxy mappings:
    ```terminal
    /opt/eap/bin/jboss-cli.sh --connect --command=:reload
    ```