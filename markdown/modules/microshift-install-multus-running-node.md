{%- set _mod_docs_content_type = "CONCEPT" %}
# Install the Multus CNI plugin on a running node {id="microshift-multus-installing-on-running-node_{{ context }}"}

If you want to attach additional networks to a pod for high-performance network configurations, you can install the {{ microshift_short }} Multus RPM package. After installation, a host restart is required to re-create all the pods with the Multus annotation. {._abstract}


:::important

Uninstalling the Multus CNI plugin is not supported.

:::


**Prerequisites**

*   You have root access to the host.

**Procedure**

1.  Install the Multus RPM package by running the following command:
    ```terminal
    $ sudo dnf install microshift-multus
    ```

    :::tip

    If you create your custom resources (CRs) for additional networks now, you can complete your installation and apply configurations with one restart.
    
    :::

1.  To apply the package manifest to an active node, restart the host by running the following command:
    ```terminal
    $ sudo systemctl restart
    ```

**Verification**

*   After restarting, ensure that the Multus CNI plugin components are created by running the following command:
    ```terminal
    $ oc get pod -A | grep multus
    ```
    ```terminal title="Example output"
    openshift-multus      dhcp-daemon-ktzqf     1/1   Running   0     45h
    openshift-multus      multus-4frf4          1/1   Running   0     45h
    ```

**Next steps**

1.  If you have not done so, configure and apply the additional networks you want to use.
1.  Deploy your applications that use the created CRs.