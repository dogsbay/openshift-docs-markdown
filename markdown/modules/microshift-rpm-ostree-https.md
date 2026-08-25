{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using the RPM-OStree HTTP or HTTPS proxy {id="microshift-rpm-ostree-https_{{ context }}"}

To use the HTTP or HTTPS proxy in RPM-OStree, add a `Service` section to the configuration file and set the `http_proxy environment` variable for the `rpm-ostreed` service. {._abstract}

**Procedure**

1.  Add this setting to the `/etc/systemd/system/rpm-ostreed.service.d/00-proxy.conf` file:
    ```terminal
    [Service]
    Environment="http_proxy=http://$PROXY_USER:$PROXY_PASSWORD@$PROXY_SERVER:$PROXY_PORT/"
    ```
1.  Next, reload the configuration settings and restart the service to apply your changes.
    1.  Reload the configuration settings by running the following command:
        ```terminal
        $ sudo systemctl daemon-reload
        ```
    1.  Restart the `rpm-ostreed` service by running the following command:
        ```terminal
        $ sudo systemctl restart rpm-ostreed.service
        ```