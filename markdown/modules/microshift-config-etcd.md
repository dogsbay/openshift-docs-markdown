{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure the memoryLimitMB value to set parameters for the etcd server {id="microshift-config-etcd_{{ context }}"}

By default, etcd uses as much memory as necessary to handle the system load. On memory-constrained systems, limiting the amount of memory etcd uses might be necessary. Configure the `memoryLimitMB` parameter to restrict the memory consumption of the etcd server. {._abstract}

**Procedure**

*   Edit the `/etc/microshift/config.yaml` configuration file to set the `memoryLimitMB` value.
    ```yaml
    etcd:
      memoryLimitMB: 128
    ```

    :::note

    The minimum required value for `memoryLimitMB` on {{ microshift_short }} is 128 MB. Values close to the minimum value are more likely to impact `etcd` performance. Lower limits increase the time etcd takes to respond to queries. If the limit is too low or etcd usage is high, queries might time out.
    
    :::


**Verification**

1.  Restart {{ microshift_short }} to apply the changes by running the following command:
    ```terminal
    $ sudo systemctl restart microshift
    ```
1.  Verify that the new `memoryLimitMB` value is in use by running the following command:
    ```terminal
    $ systemctl show --property=MemoryHigh microshift-etcd.scope
    ```