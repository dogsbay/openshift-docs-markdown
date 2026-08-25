{%- set _mod_docs_content_type = "SNIPPET" %}

If you created the key pair on a {{ op_system_base_full }} system, before you can use the public key on a Windows system, make sure the public key is saved using ASCII encoding. For example, the following PowerShell command copies a public key, encoding it for the ASCII character set:

```terminal
C:\> echo "ssh-rsa <ssh_pub_key>" | Out-File <ssh_key_path> -Encoding ascii
```

where:


`<ssh_pub_key>`
:   Specifies the SSH public key used to access the cluster.

`<ssh_key_path>`
:   Specifies the path to the SSH public key.