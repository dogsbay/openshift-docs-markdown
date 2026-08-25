{%- set _mod_docs_content_type = "REFERENCE" %}
# Additional configuration and troubleshooting {id="additional-config-troubleshooting_{{ context }}"}

You can configure additional NFS mount options to customize volume behavior and optimize performance for your specific storage requirements. {._abstract}

Depending on what version of NFS is being used and how it is configured,
there may be additional configuration steps needed for proper export and
security mapping. The following are some that may apply:

<table>
<tbody>
<tr>
  <td>NFSv4 mount incorrectly shows all files with ownership of <code>nobody:nobody</code></td>
  <td><ul><li>Could be attributed to the ID mapping settings, found in <code>/etc/idmapd.conf</code> on your NFS.</li><li>See <a href="https://access.redhat.com/solutions/33455">this Red Hat Solution</a>.</li></ul></td>
</tr>
<tr>
  <td>Disabling ID mapping on NFSv4</td>
  <td><ul><li>On the NFS server, run the following command:</li></ul><pre># echo 'Y' &gt; /sys/module/nfsd/parameters/nfs4_disable_idmapping</pre></td>
</tr>
</tbody>
</table>