{%- set _mod_docs_content_type = "PROCEDURE" %}
# Editing the ServiceMeshControlPlane with the CLI {id="ossm-control-plane-deploy-cli_{{ context }}"}

You can create or edit the `ServiceMeshControlPlane` with the command line.

**Procedure**

1.  Log in to the {{ product_title }} CLI as a user with the `cluster-admin` role. If you use {{ product_dedicated }}, log in as a user with the `dedicated-admin` role. After you run the following command, enter your username and password when prompted:
    ```terminal
    $ oc login --username=<NAMEOFUSER> https://<HOSTNAME>:6443
    ```
1.  Change to the project where you installed the {{ SMProductShortName }} control plane, for example `istio-system`.
    ```terminal
    $ oc project istio-system
    ```
1.  Edit the `ServiceMeshControlPlane` file.
    1.  Run the following command to edit the {{ SMProductShortName }} control plane where `<istio-installation.yaml>` includes a full path to the file you edited:
        ```terminal
        $ oc edit -n istio-system -f <istio-installation.yaml>
        ```
1.  Run the following command to see the status of the {{ SMProductShortName }} control plane installation.
    ```terminal
    $ oc get smcp -n istio-system
    ```

    The installation has finished successfully when the READY column is true.
    ```
    NAME            READY   STATUS              TEMPLATE   VERSION   AGE
    basic   9/9     InstallSuccessful   default    v2.0      4m25s
    ```