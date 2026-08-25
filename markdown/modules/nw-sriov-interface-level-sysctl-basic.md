{%- set _mod_docs_content_type = "CONCEPT" %}
# Setting one sysctl flag {id="nw-setting-one-sysctl-flag_{{ context }}"}

You can set interface-level network `sysctl` settings for a pod connected to a SR-IOV network device. {._abstract}

In this example, `net.ipv4.conf.IFNAME.accept_redirects` is set to `1` on the created virtual interfaces.

The `sysctl-tuning-test` is a namespace used in this example.

*   Use the following command to create the `sysctl-tuning-test` namespace:
    ```
    $ oc create namespace sysctl-tuning-test
    ```