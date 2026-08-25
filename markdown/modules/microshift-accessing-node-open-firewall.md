{%- set _mod_docs_content_type = "PROCEDURE" %}
# Open the firewall for remote access to the {{ microshift_short }} node {id="microshift-accessing-node-open-firewall_{{ context }}"}

You must open the firewall before a workstation user can access the {{ microshift_short }} node remotely. {._abstract}

For this procedure, `user@microshift` is the user on the {{ microshift_short }} host machine and is responsible for setting up that machine so that it can be accessed by a remote user on a separate workstation.

**Prerequisites**

*   You installed the {{ oc_first }}.
*   Your account has cluster administration privileges.

**Procedure**

*   As `user@microshift` on the {{ microshift_short }} host, open the firewall port for the Kubernetes API server (`6443/tcp`) by running the following command:
    ```terminal
    [user@microshift]$ sudo firewall-cmd --permanent --zone=public --add-port=6443/tcp && sudo firewall-cmd --reload
    ```

**Verification**

*   As `user@microshift`, verify that {{ microshift_short }} is running by entering the following command:
{% leveloffset +2 %}{% include "./snippets/microshift-healthy-pods-snip.md" %}{% endleveloffset %}