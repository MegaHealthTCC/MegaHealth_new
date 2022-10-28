using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infra.Data.Migrations
{
    public partial class CrudUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "isAdm",
                table: "Cliente");

            migrationBuilder.RenameColumn(
                name: "ClientId",
                table: "Pedido",
                newName: "PessoaId");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Cliente",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "Cliente",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "Cliente");

            migrationBuilder.DropColumn(
                name: "Password",
                table: "Cliente");

            migrationBuilder.RenameColumn(
                name: "PessoaId",
                table: "Pedido",
                newName: "ClientId");

            migrationBuilder.AddColumn<bool>(
                name: "isAdm",
                table: "Cliente",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);
        }
    }
}
