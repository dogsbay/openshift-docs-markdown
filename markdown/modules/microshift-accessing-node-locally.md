{%- set _mod_docs_content_type = "PROCEDURE" %}
# Access the {{ microshift_short }} node locally {id="accessing-microshift-node-locally_{{ context }}"}

Use the following procedure to access the {{ microshift_short }} node locally by using a `kubeconfig` file. {._abstract}

**Prerequisites**

*   You installed the {{ oc_first }}.

**Procedure**

1.  Optional: to create a `~/.kube/` folder if your {{ op_system_base_full }} machine does not have one, run the following command:
    ```terminal
    $ mkdir -p ~/.kube/
    ```
1.  Copy the generated local access `kubeconfig` file to the `~/.kube/` directory by running the following command:
    ```terminal
    $ sudo cat /var/lib/microshift/resources/kubeadmin/kubeconfig > ~/.kube/config
    ```
1.  Update the permissions on your `~/.kube/config` file by running the following command:
    ```terminal
    $ chmod go-r ~/.kube/config
    ```

**Verification**

*   Verify that {{ microshift_short }} is running by entering the following command:
{% leveloffset +2 %}{% include "./snippets/microshift-healthy-pods-snip.md" %}{% endleveloffset %}