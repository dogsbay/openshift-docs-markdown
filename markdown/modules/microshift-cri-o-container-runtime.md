{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using a proxy in the CRI-O container runtime {id="microshift-CRI-O-container-engine_{{ context }}"}

To use an HTTP or HTTPS proxy in CRI-O, you can add a systemd `Service` drop-in file that defines the `HTTP_PROXY`, `HTTPS_PROXY`, and optional `NO_PROXY` environment variables. You can reload systemd, restart `crio`, and restart the {{ microshift_short }} service so the proxy settings apply. {._abstract}

**Procedure**

1.  Create the directory for the configuration file if it does not exist:
    ```terminal
    $ sudo mkdir /etc/systemd/system/crio.service.d/
    ```
1.  Add the following settings to the `/etc/systemd/system/crio.service.d/00-proxy.conf` file:
    ```config
    [Service]
    Environment=NO_PROXY="localhost,127.0.0.1"
    Environment=HTTP_PROXY="http://$PROXY_USER:$PROXY_PASSWORD@$PROXY_SERVER:$PROXY_PORT/"
    Environment=HTTPS_PROXY="http://$PROXY_USER:$PROXY_PASSWORD@$PROXY_SERVER:$PROXY_PORT/"
    ```

    :::important

    You must define the `Service` section of the configuration file for the environment variables or the proxy settings fail to apply.
    
    :::

1.  Reload the configuration settings:
    ```terminal
    $ sudo systemctl daemon-reload
    ```
1.  Restart the CRI-O service:
    ```terminal
    $ sudo systemctl restart crio
    ```
1.  Restart the {{ microshift_short }} service to apply the settings:
    ```terminal
    $ sudo systemctl restart microshift
    ```

**Verification**

1.  Verify that pods are started by running the following command and examining the output:
    ```terminal
    $ oc get all -A
    ```
1.  Verify that {{ microshift_short }} is able to pull container images by running the following command and examining the output:
    ```terminal
    $ sudo crictl images
    ```