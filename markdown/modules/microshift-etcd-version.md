{%- set _mod_docs_content_type = "PROCEDURE" %}
# Check the etcd version {id="microshift-version-etcd_{{ context }}"}

You can get the version information for the etcd database included with your {{ microshift_short }} by using one or both of the following methods, depending on the level of information that you need. {._abstract}

**Procedure**

*   To display the base database version information, run the following command:
    ```terminal
    $ microshift-etcd version
    ```
    ```terminal title="Example output"
    microshift-etcd Version: 4.20.0
    Base etcd Version: 3.5.13
    ```
*   To display the full database version information, run the following command:
    ```terminal
    $ microshift-etcd version -o json
    ```
    ```terminal title="Example output"
    {
      "major": "4",
      "minor": "20",
      "gitVersion": "4.20.0",
      "gitCommit": "140777711962eb4e0b765c39dfd325fb0abb3622",
      "gitTreeState": "clean",
      "buildDate": "2025-11-03T16:37:53Z",
      "goVersion": "go1.21.9"
      "compiler": "gc",
      "platform": "linux/amd64",
      "patch": "",
      "etcdVersion": "3.5.13"
    }
    ```