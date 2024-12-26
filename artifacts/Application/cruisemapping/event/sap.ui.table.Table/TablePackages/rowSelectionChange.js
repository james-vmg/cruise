var context = this.getContextByIndex(this.getSelectedIndex());

if (context) {
    var data = context.getObject();
    alert(data.DEVCLASS);
    DialogPackages.close();
}
