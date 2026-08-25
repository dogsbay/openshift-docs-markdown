{%- set _mod_docs_content_type = "PROCEDURE" %}
# Access the {{ microshift_short }} node remotely {id="accessing-microshift-node-remotely_{{ context }}"}

Access the {{ microshift_short }} service from a remote location by using a `kubeconfig` file. {._abstract}

The `user@workstation` login is used to access the host machine remotely. The `<user>` value in the procedure is the name of the user that `user@workstation` logs in with to the {{ microshift_short }} host.

**Prerequisites**

*   You installed the {{ oc_first }}.
*   The `user@microshift` has opened the firewall from the local host.
*   You generated additional `kubeconfig` files.

**Procedure**

1.  As `user@workstation`, create a `~/.kube/` folder if your {{ op_system_base_full }} machine does not have one by running the following command:
    ```terminal
    [user@workstation]$ mkdir -p ~/.kube/
    ```
1.  As `user@workstation`, set a variable for the hostname of your {{ microshift_short }} host by running the following command:
    ```terminal
    [user@workstation]$ MICROSHIFT_MACHINE=_<microshift_hostname>_
    ```

    Replace the value, _&lt;{{ microshift_short }}_hostname>_, with the either the name or the IP address of the host running {{ microshift }}.
1.  As `user@workstation`, copy the generated `kubeconfig` file that has the hostname or IP address you want to connect to from the {{ op_system_base }} machine running {{ microshift_short }} to your local machine by running the following command:
    ```terminal
    [user@workstation]$ ssh _<user>_@$MICROSHIFT_MACHINE "sudo cat /var/lib/microshift/resources/kubeadmin/$MICROSHIFT_MACHINE/kubeconfig" > ~/.kube/config #
    ```

    Replace _&lt;user>_ with your SSH login credentials.
1.  As `user@workstation`, update the permissions on your `~/.kube/config` file by running the following command:
    ```terminal
    $ chmod go-r ~/.kube/config
    ```

**Verification**

*   As `user@workstation`, verify that {{ microshift_short }} is running by entering the following command:
{% leveloffset +2 %}{% include "./snippets/microshift-healthy-pods-snip.md" %}{% endleveloffset %}